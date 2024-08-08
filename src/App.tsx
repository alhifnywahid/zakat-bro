import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import CusDashboard from './pages/Night/CusDashboard';
import InputPenerimaZakat from './pages/Night/InputPenerimaZakat';
import DataAlternatif from './pages/Night/DataAlternatif';
import DataKriteria from './pages/Night/DataKriteria';
import BobotKriteria from './pages/Night/BobotKriteria';
import PerhitunganWeightProduct from './pages/Night/PerhitunganWeightProduct';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import DefaultLayout from './layout/DefaultLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Routes outside DefaultLayout */}
      <Route
        path="/masuk"
        element={
          <>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/daftar"
        element={
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        }
      />

      {/* Routes within DefaultLayout */}
      <Route element={<DefaultLayout />}>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="dashxyz"
          element={
            <>
              <PageTitle title="Dashboard" />
              <CusDashboard />
            </>
          }
        />
        <Route
          path="input-penerima-zakat"
          element={
            <>
              <PageTitle title="Input Penerima Zakat" />
              <InputPenerimaZakat />
            </>
          }
        />
        <Route
          path="data-alternatif"
          element={
            <>
              <PageTitle title="Data Alternatif" />
              <DataAlternatif />
            </>
          }
        />
        <Route
          path="data-kriteria"
          element={
            <>
              <PageTitle title="Data Kriteria" />
              <DataKriteria />
            </>
          }
        />
        <Route
          path="bobot-kriteria"
          element={
            <>
              <PageTitle title="Bobot Kriteria" />
              <BobotKriteria />
            </>
          }
        />
        <Route
          path="perhitungan"
          element={
            <>
              <PageTitle title="Perhitungan Weight Product" />
              <PerhitunganWeightProduct />
            </>
          }
        />
        <Route
          path="calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

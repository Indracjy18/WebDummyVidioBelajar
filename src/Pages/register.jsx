import FormLogin from "../components/Fragments/Form/FormLogin";
import FormRegister from "../components/Fragments/Form/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Pendaftaran Akun"
      text="Yuk, daftarkan akunmu sekarang juga!"
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;

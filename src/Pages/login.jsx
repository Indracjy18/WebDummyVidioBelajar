import FormLogin from "../components/Fragments/Form/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts
      title="Masuk ke Akun"
      text="Yuk, lanjutin belajarmu di videobelajar."
    >
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;

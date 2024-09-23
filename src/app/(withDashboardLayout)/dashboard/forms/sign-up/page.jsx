import SignUp from "@/components/Dashboard/SignUp/SignUp";

const SignUpPage = () => {
  return (
    <>
      <SignUp role={process.env.ADMIN_ROLE} />
    </>
  );
};

export default SignUpPage;

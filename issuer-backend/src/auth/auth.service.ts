import {
  completeIssuerFlow,
  registerOrg,
  signInOrg,
} from "../services/polygon.service";

export const SignupOrg = async (email: string, password: string) => {
  await registerOrg(email, password);
};

export const SignInOrg = async (email: string, password: string) => {
  const { isVerified, token } = await signInOrg(email, password);
  if (isVerified) {
    return token;
  } else {
    const updatedToken = await completeIssuerFlow(token!);
    return updatedToken;
  }
};

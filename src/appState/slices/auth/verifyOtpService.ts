import ThunkService from "@/services/thunkService";

const { postService: verifyOtpService } = new ThunkService("verify-otp-code");

export default verifyOtpService;

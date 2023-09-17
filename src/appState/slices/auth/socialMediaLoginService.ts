import ThunkService from "@/services/thunkService";

const { postService: socialMediaLoginService } = new ThunkService(
  "login-by-social-media"
);

export default socialMediaLoginService;

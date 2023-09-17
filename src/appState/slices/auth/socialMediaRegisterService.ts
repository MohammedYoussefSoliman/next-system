import ThunkService from "@/services/thunkService";

const { postService: socialMediaRegisterService } = new ThunkService(
  "register-by-social-media"
);

export default socialMediaRegisterService;

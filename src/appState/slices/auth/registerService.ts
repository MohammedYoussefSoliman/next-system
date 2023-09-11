import ThunkService from "@/services/thunkService";

const { postService: registerService } = new ThunkService("register");

export default registerService;

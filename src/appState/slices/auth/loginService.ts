import ThunkService from "@/services/thunkService";

const { postService: registerService } = new ThunkService("login");

export default registerService;

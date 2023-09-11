import ThunkService from "@/services/thunkService";

const { postService: registerService } = new ThunkService("logout");

export default registerService;

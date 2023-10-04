import ThunkService from "@/services/thunkService";

const { getService: categoriesService } = new ThunkService("all-categories");

export default categoriesService;

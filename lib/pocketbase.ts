import PocketBase from "pocketbase";

const db = new PocketBase("https://my-games-store.pockethost.io");

const getAllProducts = async () => {
  try {
    return await db.collection("products").getFullList({
      sort: "-created",
    });
    console.log("Fetching Products");
  } catch (e) {
    console.error(e);
  }
};

const addProduct = async (data: any) => {
  try {
    return await db.collection("products").create(data);
  } catch (e) {
    console.error(e);
  }
};

const updateProduct = async (id: string, data: any) => {
  try {
    return await db.collection("products").update(`${id}`, data);
  } catch (e) {
    console.error(e);
  }
};

const removeProduct = async (id: string) => {
  try {
    return await db.collection("products").delete(`${id}`);
  } catch (e) {
    console.error(e);
  }
};

// const isLogin = () => {
//   "use client";
//   return { isAuth: db.authStore?.isValid, user: db.authStore?.model };
// };

export {
  getAllProducts,
  addProduct,
  updateProduct,
  removeProduct,
  
  db
};

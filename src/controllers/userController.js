import express from "express";

export const join = (req, res) => {
  res.send("Join");
};
export const login = (req, res) => {
  res.send("login");
};
export const edit = (req, res) => {
  res.send("Edit User");
};
export const remove = (req, res) => {
  res.send("Remove User");
};
export const see = (req, res) => {
  res.send("See profile");
};
export const logout = (req, res) => {
  res.send("logout");
};
// export default로는 한가지만 export할 수 있다.
// controller 함수들 모두 router에서 사용해야 하므로 전부 다 export const로 정의한다.

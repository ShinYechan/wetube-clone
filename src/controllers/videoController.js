import express from "express";
import res from "express/lib/response";

const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutes age",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 2,
    comments: 5,
    createAt: "1 minutes age",
    views: 5,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutes age",
    views: 59,
    id: 3,
  },
  {
    title: "4th Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutes age",
    views: 59,
    id: 4,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
  //
};
export const search = (req, res) => {
  res.send("Search");
};
export const watch = (req, res) => {
  const id = req.params.id;
  const selectedVideo = videos[id - 1];
  res.render("watch", {
    pageTitle: `${selectedVideo.title} Watching`,
    selectedVideo,
  });
};
export const edit = (req, res) => {
  res.render("edit");
};
export const remove = (req, res) => {
  res.send("Remove");
};
export const upload = (req, res) => {
  res.send("Upload");
};

import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import InputOption from "./InputOption";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL}>{name[0]} </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Recomendar" color="gray" />
        <InputOption Icon={CommentIcon} title="Comentar" color="gray" />
        <InputOption Icon={ShareIcon} title="Compartir" color="gray" />
        <InputOption Icon={SendIcon} title="Enviar" color="gray" />
      </div>
    </div>
  );
});

export default Post;

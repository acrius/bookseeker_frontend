import React from 'react';
import { Link } from 'react-router-dom';
import { getFormatDate } from '../../../../utils/datetime';
import { render } from '../../../../utils/markdown';

const PostPreview = (post) =>
  <article className="post_preview">
    <header className="post_preview__header">
      <div className="post_preview__header__username">
        {post.owner.username}
      </div>
      <div className="post_preview__header__publication_date">
        {' ' + getFormatDate(post.publication_date)}
      </div>
      <h2 className="post_preview__header__title">{post.title}</h2>
      <div className="post_preview__header__tags">{post.tags.join(",")}</div>
    </header>
    <div className="post_preview__content" dangerouslySetInnerHTML={{__html: render(post.preview)}}>
    </div>
    <footer className="post_preview__footer">
      <Link to={`/posts/${post.id}/`} className="post_preview__footer__detail">Подробнее</Link>
    </footer>
  </article>


export default PostPreview;

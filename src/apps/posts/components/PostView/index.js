import React from 'react';
import { render } from '../../../../utils/markdown';
import { getFormatDate } from '../../../../utils/datetime';

export default (post) =>
  <article className="post_view">
    <header className="post_view__header">
      <h2>{post.title}</h2>
    </header>
    <div className="post_view__content" dangerouslySetInnerHTML={{__html: render(post.content)}}>
    </div>
    <footer className="post_view__footer">
      <div className="post_view__footer__username">{post.owner.username}</div>
      <div className="post_view__footer__publication_date">{getFormatDate(post.publication_date)}</div>
    </footer>
  </article>

import React from 'react'
import PropTypes from 'prop-types';

export default function Maincol(props) {
    const {title, body} = props;
    const paragraphs = body.map((p, index) =>
        <p key={index} className={p.className}>{p.text}</p>
    )
    return <article id="main-col">
        <h1 className="page-title">{title}</h1>
            {paragraphs}
    </article>
}

Maincol.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired
};
Maincol.defaultProps = {};

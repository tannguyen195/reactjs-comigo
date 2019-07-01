import React, { Component } from 'react'
import { Link, Router } from 'routes'

export default class extends Component {

    render() {
        const { data } = this.props

        return (
            <div className="project__card" key={data._id}>
                <Link prefetch to={"/" + data._id} >
                    <a>
                        <img alt="cover" src={data.coverURL} />
                        <div className="Button-Black-Left title">{data.name}</div>
                        <div className="Caption-Grey-Left">{data.shares.length + 1} members</div>
                    </a>
                </Link>
            </div>

        )
    }
}



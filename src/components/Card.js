import React, { Component } from 'react'
import Service from './Service';
import { Link } from 'react-router-dom'


export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            movie: []
        }
    }
    componentDidMount() {
        Service.getMovie().then(res => {
            this.setState({ movie: res })
        })
        
    }
    render() {
        return (
            this.state.movie.map((ele) => {
                return <Link to='/movie' state={{details:ele}} key={ele.movieId}>
                    <div className="container mx-auto" >
                        <div className="bg-white border border-gray-200 shadow-md p-1 rounded-lg outer">
                            <img src={ele.picture} className="w-full h-full rounded-lg" alt="jawan pic" />
                            <div className="bg-blue-500 text-white text-center py-1 mt-2 rounded-b-lg">
                                <button className="btn btn-primary btn-sm">{ele.movieLikes}</button>
                            </div>
                        </div>
                        <span className="block mt-2 text-lg font-semibold mname">{ele.movieName}</span>
                    </div></Link>
            })
        )
    }
}
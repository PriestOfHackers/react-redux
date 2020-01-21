import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value

        const post = {
            id : 0,
            description: description,
            imageLink:imageLink
        }

        if(description && imageLink){
            this.props.onAddPhoto(post)
        }
    }
    render(){
        return (
        <div>
             <h1>PhotoWall</h1>
            <div className="form">
                <form>
                    <input type = "text" placeholder="Link"/>
                    <input type= "text" placeholder="Description"/>
                    <button>Post</button>
                 </form>
                </div>
        </div>
        )
    }
}

export default AddPhoto
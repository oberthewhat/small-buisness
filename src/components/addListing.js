import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddListing extends Component {
    state = {
        open: false,
        name: '',
        address: '',
        hours: '',
        description: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }


    //this.props.updatePlace is not a function
    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.placeTotal + 1
        delete payload.open
        console.log("The Place", this.props)
        this.props.updatePlace(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                address: '',
                hours: '',
                description: ''
            })
        }
    }

    render() {
        console.log(this.props.updatePlace)
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={this.toggleDialog}
                    >
                        Add Listing
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Business</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddListing
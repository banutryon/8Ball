class App extends React.Component {
  state = {
    name: "",
    url: "",
    ballArr: []
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]:
      event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    axios.post('/movepropstore', this.state).then(response => this.setState({
      ballArr: response.data, name: "", url: ""})
    )
  }

    deleteGif = (event) => {
      axios.delete('/eightball/' + event.target.value).then(response => {
        this.setState({
          ballArr: response.data
        })
      })
    }
    updateGif = (event) => {
      event.preventDefault()
      event.target.reset()
      const id = event.target.id
      axios.put('/eightball/' + id, this.state).then(response => {
        this.setState({
          ballArr: response.data,
          name: "",
          url: ""
        })
      })
    }

    componentDidMount = () => {
        axios.get("/eightball").then(response => {
          this.setState({
              ballArr: response.data
          })
        })
    }


    render = () => {
      return (
        <div>
        {/* create form  */}
        <details className="view create">
        <summary>Add new Gif to 8 Ball</summary>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
          onChange={this.handleChange} />
          <br />
          <label htmlFor="image">Image</label>
          <input
          type='text'
          id='image'
          onChange={this.handleChange} />
        <br />
        <input className="myButton" type="submit" value="Add Gif" />
        </form>
        </details>
        {/* display content  */}

        <ul>
          {this.state.ballArr.map((ball) => {
            return (
              <li key={ball._id}>
              <h2 className="gifName">{ball.name}</h2>

              <details className="view">
              <summary><img className="ballGif"
              src={ball.image} alt={ball.name} /></summary>
              <br/>
              <button className="myButton"
              value={ball._id}
              onClick={this.deleteGif}>Delete</button>
              {/* edit button  */}
              <summary>Edit Gif</summary>
              <form id={ball._id}
              onSubmit={this.updateGif}>
              <label htmlFor="">Name</label>
              <br/>
              <input
              type="text"
              id="name"
              onChange={this.handleChange} />
              <br/>
              <label htmlFor="image">Image</label>
              <br/>
              <input
              className="myButton"
              type="submit"
              value="Update Ball"/>
              </form>

              </details>
              </li> 
            )
          })
        }
        </ul>
        </div>
      )
    }
}






ReactDOM.render(<App></App>, document.querySelector('main'))

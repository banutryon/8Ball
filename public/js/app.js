class App extends React.Component {
  state = {
    name: "",
    url: "",
    ballArr: [],
    currentPhrase: "",
    currentUrl: "",
    currentID:""
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]:
      event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    axios.post('/eightball', this.state).then(response => this.setState({
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
  selectMeme = (event) => {
    event.preventDefault();
    let theData = this.state.ballArr;
    // console.log(`The data: ${theData}`);
    let arrLen = theData.length;
    // console.log(`The data length: ${arrLen}`);
    const randomIndex = Math.floor(Math.random() * arrLen);
    // console.log(`The index: ${randomIndex}`)
    let meme = theData[randomIndex];
    // console.log(`The meme: ${meme}`);
    let name = meme.name;
    // console.log(name);
    let gif = meme.url;
    // console.log(gif);
    let id = meme._id;
    console.log(id);
    this.setState({currentPhrase: name});
    this.setState({currentUrl: gif});
    this.setState({currentID: id});
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
        <details className="create">
        <summary><img className="ballCreate"
        src="ball.png" alt="Create Ball" /></summary>
        <div className="formBorder">
        <h3>Add new Gif to 8 Ball</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
          onChange={this.handleChange} />
          <br />
          <label htmlFor="url">Image</label>
          <input
          type='text'
          id='url'
          onChange={this.handleChange} />
        <br />
        <input className="myButton" type="submit" value="Add Gif" />
        </form>
<<<<<<< HEAD
        </div>
=======
        <button onClick={this.selectMeme}>Random</button>
>>>>>>> 2ce686a3007b5045197ac52a5d9db2e65b72ef1d
        </details>
        {/* display content  */}
        <span>
        <img className="Eball"
        src="ball.png" alt="Create Ball" />
        <ul>
              <li key={this.state.currentID}>
              <details className="view">
              <summary><img className="ballGif"
              src={this.state.currentUrl} alt={this.state.currentPhrase} /></summary>
              <br/>
              <h2 className="gifName">{this.state.currentPhrase}</h2>
              {/* edit button  */}
              <summary>Edit Gif</summary>
              <form id={this.state.currentID}
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
              <button className="myButton"
              value={this.state.currentID}
              onClick={this.deleteGif}>Delete</button>

              </details>
              </li>
        </ul>
        </span>
      </div>
    )
  }
}




ReactDOM.render(<App></App>, document.querySelector('main'))

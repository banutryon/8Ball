class App extends React.Component {
  state = {
    name: "",
    url: "",
    ballArr: [],
    currentPhrase: "",
    currentUrl: "https://lh3.googleusercontent.com/proxy/bW2gavOQbrCSVqIhgR3GGyxWT8t-UuwPFCzS0cSkyxjUZKjcMTUAGEDKwstiYfZGWm64l8y5FHhnd-NhL6Kz_ae-dw",
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
        <p>We wanted to share a fun app that is designed to help with stress and put a smile on your face. Simply ask the 8 ball a question and click the ask button.In this app you can add new gifs by simply adding a name and url to the creat button. This button is hidden inside the 8 ball logo. </p>

        <h3>You can also add a new Gif to 8 Ball in this form</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br/>
          <input
          type="text"
          id="name"
          onChange={this.handleChange} />
          <br />
          <label htmlFor="url">Image</label>
          <br/>
          <input
          type='text'
          id='url'
          onChange={this.handleChange} />
        <br />
        <input className="myButton" type="submit" value="Add Gif" />
        </form>


        </div>

        </details>


        {/* display content  */}
        <span>
        <img className="Eball"
        src="8ball.png" alt="Create Ball" />
        <button className="myButton ask" onClick={this.selectMeme}>Ask 8 Ball</button>

        <ul>
              <li key={this.state.currentID}>
              <details className="view">
              <summary><img className="ballGif"
              src={this.state.currentUrl} alt={this.state.currentPhrase} /></summary>

              <div className="formBorder edit">
              <br/>
              <h2 className="gifName">{this.state.currentPhrase}</h2>
              {/* edit button  */}
              <summary>Edit Gif</summary><br/>

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
              type="text"
              id="name"
              onChange={this.handleChange} />
              <br/>
              <input
              className="myButton"
              type="submit"
              value="Update Ball"/>
              </form>
              <button className="myButton"
              value={this.state.currentID}
              onClick={this.deleteGif}>Delete</button>
              </div>
              </details>

              </li>
        </ul>
        </span>
      </div>
    )
  }
}




ReactDOM.render(<App></App>, document.querySelector('main'))

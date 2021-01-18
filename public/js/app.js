class App extends React.Component {
  ballShook = false;
  state = {
    name: "",
    url: "",
    ballArr: [],
    currentPhrase: "",
    currentUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsdB6Vy3BevQbpgl6MK4uopPR348JS5YnjA&usqp=CAU",
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
  addShake = () => {
    document.getElementById("memeBall").style.animation = "shake 0.5s 5";
  }
  removeShake = () => {
    // document.getElementById("memeBall").style.animation = "";
    document.getElementById("memeBall").style.animation = "none";
  }
  shakeBall = () => {
    // event.preventDefault();
    // if(this.ballShook) {
    //   this.removeShake();
    //   this.ballShook = false;
    //   this.addShake();
    // } else {
    //   this.ballShook = true;
    //   this.addShake();
    // }
    this.removeShake();
    document.getElementById("memeBall").offsetHeight;
    this.addShake();
    // setTimeout(this.removeShake(), 2000);
    // document.getElementById("memeBall").classList.remove("shake");
    // void element.offsetWidth;
    // document.getElementById("memeBall").classList.add("shake");
  }
  selectMeme = (event) => {
    event.preventDefault();
    this.shakeBall();
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
        <p>We wanted to share a fun app that is designed to help with stress and put a smile on your face. Simply ask the 8 Ball a question and click the ask button. By selecting the image inside of the 8 Ball you can also edit or delete any of the giphys.  </p>

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
        <span className="body">
        <img id="memeBall" className="Eball"
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
        <img id="void" className="blank"
        src="https://lh3.googleusercontent.com/proxy/blXKwwdPsKJTtvwNbO788arCMbQz9HTm2MnAEwZMuKV4n3NApxJ8YbBEyWB6Ze0mEBpMFjhEKca1ate2UIc4sFjOyQ" alt="" />

        </span>
      </div>
    )
  }
}




ReactDOM.render(<App></App>, document.querySelector('main'))

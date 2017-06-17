
Get the br


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'Get your bread,jelly,butter knife,and peanut butter'
       ',Get knife dip it in the jelly smear it on the bread 
      ',Get the knife again and dip it in the jelly smear it on the brea
        P ut the two breads thogther 
        You a pb and j
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;

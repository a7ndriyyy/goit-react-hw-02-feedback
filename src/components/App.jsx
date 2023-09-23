
  class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
     onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };
  return (
   <div className="App">
        <section>
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
  );
};

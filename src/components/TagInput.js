import React from 'react';
import '../assets/scss/tagInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TagInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      focused: false,
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.items && this.state.items.length != prevState.items.length)
    {
      this.props.typesHandle(this.state.items);
    }
  }
  render() {
    return (
      <div>
        <ul className="container">
          {this.state.items.map((item, i) =>
            <li key={i} className="items" onClick={this.handleRemoveItem(i)}>
              {item}
              <FontAwesomeIcon icon='times' className='cancel-icon' size='1x'/>
            </li>
          )}
          <input
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
            placeholder='type in the bin type'
            />
        </ul>
      </div>
    );
  }

  handleInputChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown(evt) {
    if ( evt.keyCode === 13 ) {
      const {value} = evt.target;
      this.setState(state => ({
        items: [...state.items, value],
        input: ''
      }));
    }
    if ( this.state.items.length && evt.keyCode === 8 && !this.state.input.length ) {
      this.setState(state => ({
        items: state.items.slice(0, state.items.length - 1)
      }));
    }
  }

  handleRemoveItem(index) {
    return () => {
      this.setState(state => ({
        items: state.items.filter((item, i) => i !== index)
      }));

    }
  }
}
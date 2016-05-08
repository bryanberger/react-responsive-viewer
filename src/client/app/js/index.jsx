require('../scss/styles.scss')

import React from 'react'
import {render} from 'react-dom'
import Frame from './components/Frame.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.scrollBarWidth = 15
    // the * refers to actual bps in our Patterns grid: https://github.com/generalassembly/patterns/blob/master/scss/_variables.scss
    this.sizes = [
      { id:0, title:'320px', width:320+this.scrollBarWidth },
      { id:1, title:'375px', width:375+this.scrollBarWidth },
      { id:2, title:'480px *', width:480+this.scrollBarWidth },
      { id:3, title:'640px', width:640+this.scrollBarWidth },
      { id:4, title:'720px *', width:720+this.scrollBarWidth },
      { id:5, title:'960px *', width:960+this.scrollBarWidth },
      { id:6, title:'1280px *', width:1280+this.scrollBarWidth }
    ]
    this.state = {
      src: 'http://ga.co',
      srcPrefix: 'https://serene-mountain-35110.herokuapp.com/',
      srcNew: '',
      frameHeight: 720
    }
  }

  formatURL(url) {
    // if the url doesn't contain http or https add http
    if (url && !/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
    }

    return url;
  }

  handleSubmit(e) {
    e.preventDefault();

    // once submitted, reload all iframes by setting src to the rolling srcNew
    if(this.state.srcNew)
      this.setState({ src: this.state.srcNew })
  }

  render() {
    const { frameHeight, src, srcNew, srcPrefix } = this.state

    const frames = this.sizes.map((size, index) => {
      return (
        <Frame
          key={size.id}
          title={size.title}
          src={srcPrefix + src}
          height={frameHeight}
          width={size.width}
        />
      )
    })

    return (
      <div className="wrapper">
        <form onSubmit={e => this.handleSubmit(e)}>
          <fieldset>
            <label>Page URL:
              <input
                type="text"
                defaultValue={src}
                onChange={e => this.setState({ srcNew: this.formatURL(e.target.value) })}
              ></input>
            </label>
            <button type="submit" className="hidden">Load New Page</button>
            <label>Frame Height (px):
              <input
                type="number"
                defaultValue={frameHeight}
                onChange={e => this.setState({ frameHeight: e.target.value })}
              ></input>
            </label>
          </fieldset>
        </form>

        <ul className="frames">
          {frames}
        </ul>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

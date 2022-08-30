import SendIcon from '@material-ui/icons/Send';
import { memo } from 'react';

const Newsletter = () => {
  console.log('hello i am Newsletter components');

  return (
    <div className="newsletter">
      <div className="container">
          <div className="content">
              <h1>Newsletter</h1>
              <p>Get timely updates from your favorite products.</p>
              <div className="form">
                <input type="email" placeholder="your email"/>
                <button>
                    <SendIcon />
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default memo(Newsletter)

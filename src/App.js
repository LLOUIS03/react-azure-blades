import React from 'react';
import BladeHost from '../src/components/blade-host/BladeHost';
import BladeStack from '../src/components/blade-stack/BladeStack';
import BladeElement from '../src/components/blade-element/BladeElement';
import BladeHeader from '../src/components/blade-header/BladeHeader';
import BladeContent from '../src/components/blade-content/BladeContent';
import BladeFooter from '../src/components/blade-footer/BladeFooter';

function App() {
  return (
    <BladeHost>
      <BladeStack>
        <BladeElement>
          <>
            <BladeHeader title="Subscriptions" subTitle="Default Directory" />
            <BladeContent>
              <>
                <h2>asdf X</h2>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum
                </p>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum
                </p>
              </>
            </BladeContent>
            <BladeFooter>
              <button>👍 Go Away</button>
            </BladeFooter>
          </>
        </BladeElement>
      </BladeStack>
    </BladeHost>
  );
}

export default App;

import React from 'react';
import { useState } from 'react'

import Header from './code/header';
import Todo from './code/todo';
import Footer from './code/footer';

function App() {

return (
        <div>
              <Header firstname="NUTTAWAN" lastname="REABREANG" student_id={630612099} ></Header>
          <Todo/>

          <Footer copyright = "Copyright © 2021 Minimal todo List by NUTTAWAN REABREANG"></Footer>
        </div> 
  );
}

export default App;
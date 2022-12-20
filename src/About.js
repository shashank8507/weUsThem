import React from "react";
import { Card } from 'react-bootstrap';

function About() {

    return <div>
        <Card id="card" style={{ width: '70rem' }}>
        
            <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
                All about me - the developer.
            </Card.Text>
            
            </Card.Body>
        </Card>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus ante lorem, sodales pulvinar tortor sed, maximus 
            posuere justo. In maximus venenatis tortor et malesuada. 
            Donec consequat ante id imperdiet eleifend. Aliquam ac 
            porta tortor, eu porttitor urna. Curabitur mattis mauris 
            eu felis aliquet vestibulum. In interdum massa vel neque 
            fermentum iaculis. Aenean consequat metus quis sollicitudin 
            blandit. Aliquam pellentesque velit id malesuada laoreet. 
            Aenean convallis nec orci at venenatis. Sed nisl felis, 
            consequat vitae consequat finibus, euismod eu tortor. 
            Curabitur sodales luctus diam, non posuere ex luctus ac.
             Mauris arcu quam, ornare ut facilisis sed, tempus ut diam.
            Vestibulum non nisi vel tellus varius gravida. Aliquam erat 
            volutpat. Vivamus ut tortor ut leo eleifend consequat</p>
    </div>
    
}

export default About;
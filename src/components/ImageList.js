
import React from 'react';

class ImageList extends React.Component {
    renderImage(imageUrl) {
        return (
            <img className="image-item" src={imageUrl} />
        );
    }

    render() {
        var data = [
          {
            url: "http://fakeimg.pl/200/?text=img1",
            name: "img1"
          },
          {
            url: "http://fakeimg.pl/200/?text=img2",
            name: "img2"
          },
          {
            url: "http://fakeimg.pl/200/?text=img3",
            name: "img3"
          },
          {
            url: "http://fakeimg.pl/200/?text=img4",
            name: "img4"
          },
          {
            url: "http://fakeimg.pl/200/?text=img5",
            name: "img5"
          }
        ]

        return (
            <div className="images">
                {data.map(data => this.renderImage(data.url))}
            </div>
        );
    }
}

export default ImageList;

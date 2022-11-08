import { Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div>
        <Container>
          <h1>About</h1>
          <p>
            Cascade Mountain Ranch is a 50-acre ranch nestled in its own private
            valley in Southern Oregon and surrounded by wilderness lands.
            Hiking/walking trails lead you throughout the ranch. The mountains
            rise on all sides, accented by Grand King Mountain Ridge to the
            east. One can hike to the Lucky Queen Mines or enjoy the view with
            pine, fir, madrone, oak and cedar trees lacing the entire panorama.
            Wild Goose Lake is home to just that—wild geese! Deer, wild turkeys,
            squirrels and, on rare occasions, elk can be seen roaming the Ranch.
            There are no dangerous animals, snakes, etc. Seasonally, the sound
            of Lucky Miner's Creek can be heard. Guests are encouraged to walk,
            hike or bike the entire 50 acres with a map of the trails with
            estimated distances. Over 30 miles of back roads are next door to
            the ranch for ATVs and motorbikes. Prior to becoming a retreat
            center in 2008, Cascade Mountain Ranch was a children's residential
            group home for 15 years. The peaceful, rural setting provided a
            great place for kids to be nurtured in a stable environment while
            learning basic skills and the strong work ethic associated with
            living in the country. After extensive renovations and upgrades the
            newly transitioned Ranch now serves as a unique wilderness location
            with guest accommodations for retreats, getaways, family reunions,
            church functions, youth groups, weddings and other special events.
            Groups and families are invited to enjoy the peaceful outdoors and
            comfortable lodges. The Ranch is run by iCare, Inc., a non-profit
            organization that helps and supports various specialized needs of
            families and children. Cascade Mountain Ranch is operated solely by
            volunteers. Please help us care for this special place.
          </p>
        </Container>
      </div>
      <div>
        <Container>
          <images>
            <h1>Some sort of scroll through or slideshow of classic family pictures</h1>
          </images>
        </Container>
      </div>
      <div>
        <Container>
          <h1>Directions</h1>
          <div>
            <h4>Coming from NORTH:</h4>
                <p>Head south on I-5.</p>
                <p>Take exit 66 toward Hugo. Go .3 mi.</p>
                <p>Turn LEFT onto Monument Dr. Go for .3 mi.</p>
                <p>Turn RIGHT onto Jump-Off Joe Creek Rd. Go 1.9 mi.</p>
                <p>Then your destination will be on your LEFT.</p>
          </div>
          <div>
            <h4>Coming from SOUTH:</h4>
                <p>Head North on I-5.</p>
                <p>Take exit 66 toward Hugo. Go .3 mi.</p>
                <p>Turn LEFT onto Monument Dr. Go for .3 mi.</p>
                <p>Turn RIGHT onto Jump-Off Joe Creek Rd. Go 1.9 mi.</p>
                <p>Then your destination will be on your LEFT.</p>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <h2>Map</h2>
          <iframe
            title="myMap"
            src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.9820332572726!2d-123.33890028446842!3d42.576903829372306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c59e2df6da1719%3A0xca312100026e0002!2s2500%20Jumpoff%20Joe%20Creek%20Rd%2C%20Grants%20Pass%2C%20OR%2097526!5e0!3m2!1sen!2sus!4v1667513044396!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </div>
      <div>
        <footer></footer>
      </div>
    </>
  );
}

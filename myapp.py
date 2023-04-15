from flask import Flask, render_template, request
import folium

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get latitude and longitude input from HTML form
        lat = float(request.form['lat'])
        lon = float(request.form['lon'])

        # Create Folium map centered at the given coordinates
        m = folium.Map(location=[lat, lon], zoom_start=12)
        folium.Marker([lat, lon], popup='Your Location').add_to(m)

        # Render the map in the HTML template
        return render_template('index.html', map=m._repr_html_())
    # in GET route
    m = folium.Map(location=[22.00963104138866, 79.10412709470455], zoom_start=12)  # india map [nagpur as center]
    return render_template('index.html', map =m._repr_html_())


if __name__ == '__main__':
    app.run(debug=True)
url = 'https://night-and-day-server.herokuapp.com/colors'
time_delay = 0.1

camera = picamera.PiCamera()
camera.resolution = (400,400)

def captureRGB():
    print 'capturing new image'
    camera.capture('image.jpg')
    print 'captured. preparing colorThief'
    color_thief = ColorThief('image.jpg')
    print 'after get color'
    dominant_color = color_thief.get_color(quality=1)
    print  'color is:'
    print(dominant_color)

    text_file = open("/home/pi/NodeApp/color.txt", "w")

    color = str(dominant_color[0]) + ', ' + str(dominant_color[1]) + ', ' + str($

    post_field = {"rgb" : color }
    r = requests.post(url, data = post_field)
    print r

    text_file.write("%s" % color)
    text_file.close()
    Timer(time_delay * 60.0, captureRGB).start()

captureRGB()

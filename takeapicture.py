import picamera
from colorthief import ColorThief

camera = picamera.PiCamera()
camera.resolution = (400,400)

while 1 == 1:
    print 'capturing new image'
    camera.capture('image.jpg')
    print 'captured. preparing colorThief'
    color_thief = ColorThief('image.jpg')
    print 'after get color'
    dominant_color = color_thief.get_color(quality=1)
    print  'color is:'
    print(dominant_color)

    text_file = open("/home/pi/NodeApp/color.txt", "w")

    color = str(dominant_color[0]) + ', ' + str(dominant_color[1]) + ', ' + str(dominant_co$
    text_file.write("%s" % color)
    text_file.close()

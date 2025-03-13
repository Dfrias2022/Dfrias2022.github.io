import qrcode








def creado_de_qr(enlace,nombre_Imagen):
    cadena = enlace                                             #DONDE IRA EL LINK PARA QR
    qr = qrcode.QRCode(version = 1, border = 0)                 #LAS PROPIEDADS DEL QR A SER GENERADO (version es para la cantidad de "complejidad")
    qr.add_data(cadena)                                         #AGREGA EL LINK DEL QR
    qr.make(fit=True)                                           #CREA EL QR(FIT ES PARA QUE OCUPE COMPLETAMENTE LA IMAGEN QR)
    creacion = qr.make_image()                                  #CREA EL QR EN BASE AL LINK
    imagen_creada = nombre_Imagen + ".png"                      #EL NOMBRE DE LA IMAGEN A CREAR (CODIGO QR)
    archivo_imagen = open(imagen_creada,'wb')                   #ABRO EL ARCHIVO A GENERAR (LO CREA SI NO EXISTE)
    creacion.save(archivo_imagen)                               #GUARDO EL CODIGO QR GENERADO DENTRO DEL ARCHIVO DE IMAGEN
    archivo_imagen.close()                                      #CIERRO EL ARCHIVO DE IMAGEN PARA GUARDAR LOS CAMBIOS
    #return archivo_imagen
    return imagen_creada
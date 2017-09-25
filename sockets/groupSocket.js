module.exports = (io) => {

    return {
        start: () => {
            
            console.log('Group socket started');

            //Whenever someone connects this gets executed
            io.on('connection', function (socket) {
                console.log('A user connected');

                //Whenever someone disconnects this piece of code executed
                socket.on('disconnect', function () {
                    console.log('A user disconnected');
                });

            });
        }
    }
}
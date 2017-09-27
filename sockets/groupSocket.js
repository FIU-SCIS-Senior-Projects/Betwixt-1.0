module.exports = (io) => {

    return {
        create: (group_uid) => {
            
            console.log('Group socket started');

            var group_room = io.of(`/${group_uid}`);
            group_room.on('connection', function(socket){
              console.log(`Someone connected to room: ${group_room}`);
            });

            //Whenever someone connects this gets executed
            io.on('connection', function (socket) {

                socket.join(group_room);

                //Whenever someone disconnects this piece of code executed
                socket.on('disconnect', function () {
                    console.log('A user disconnected');
                });

            });
        }
    }
}
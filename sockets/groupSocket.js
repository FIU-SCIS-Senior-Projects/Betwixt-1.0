module.exports = (io) => {

    return {
        create: () => {

            console.log('Group socket started');

            //Whenever someone connects this gets executed
            io.on('connection', function (socket) {

                console.log("Connection made.")

                socket.on('group_uid', (group_uid) => {
                    console.log(`User joined group: ${group_uid}`);
                    socket.join(group_uid);
                });

                socket.on('clientSendInfo', (userInfo) => {
                    console.log(`User ${userInfo.username}'s location is lat: ${userInfo.latitude} lng: ${userInfo.longitude}`)
                    io.in(userInfo.groupUID).emit('serverSendInfo', userInfo);
                })

                //Whenever someone disconnects this piece of code executed
                socket.on('disconnect', function () {
                    console.log('A user disconnected');
                });

            });
        }
    }
}
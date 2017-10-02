module.exports = (io) => {

    return {
        create: () => {

            console.log('Group socket started');

            //Whenever someone connects this gets executed
            io.on('connection', function (socket) {

                console.log("Connection made.")

                socket.on('joinGroup', (userInfo) => {
                    console.log(`User joined group: ${userInfo.groupUID}`);
                    socket.join(userInfo.groupUID);
                    socket.to(userInfo.groupUID).emit('getNewUserInfo', userInfo);
                });

                socket.on('sendUserInfo', (info) => {
                    console.log(`Sending info to specific client: ${info.socketID}`)
                    socket.to(info.socketID).emit('getExistingUserInfo', info.userInfo);
                })

                //Whenever someone disconnects this piece of code executed
                socket.on('disconnect', function () {
                    console.log('A user disconnected');
                });

            });
        }
    }
}
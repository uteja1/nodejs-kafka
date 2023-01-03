const {Kafka} = require('kafkajs');
    /* get the argument sent when run with command
            ex - node producer.js test123

            here "test123" is the message sent to the topic
   */
msg = process.argv[2];

run ();

async function run() {
    
    try {
        
        const kafka = new Kafka({
            'clientId' : 'app',
            'brokers' : ['localhost:29092']
        });

        const producer = kafka.producer();
        await producer.connect();
        console.log('connected');
        /* Based on the first letter of message sent, 
           decide to which topic partition the message need's to be added  A-M 0 , N-Z 1
        */
        const partition = msg[0] < 'N' ? 0 : 1;
        const result = await producer.send({
            'topic' : 'users', // send message to this topic
            'messages' : [
                {
                    'value' : msg,  // actual data sent to kafka broker partition
                    'partition': partition // message to be sent partition of the topic defined 
                }
            ]
        });

        console.log(`sent successfully ===> ${JSON.stringify(result)}`);

        await producer.disconnect();
    } catch (error) {
        console.error(`error : ${error}`);
    } finally {
        process.exit(0);
    }
}
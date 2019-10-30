/* 
    THIS ARTICLE REPRESENTS THE GRAPH REPRESENTATION IN 
    CLASS TERMINOLOGIES !! 
*/

let FloydWarshall = graph => {
    for ( let i = 0 ; i < length ; i++ ) {
        for ( let j = 0 ; j < length ; j++ ) {
            for ( let k = 0 ; k < length ; k++ ) {
                if ( graph[i][k] + graph[k][j] <= graph[i][j] ) {
                    graph[i][j] = graph[i][k] + graph[k][j] ; 
                }
            }
        }
    }
};
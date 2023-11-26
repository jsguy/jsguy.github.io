# AB Testing

## Flowchart

### How do we determine what experiments the user is or isn't part of?

```flow
graph LR
    A[Client] -- Connect --> B[Server]
    B -- Connection info --> C(Experiment middleware)
    C --> D{New client?}
    D -- Yes --> E(Get cookie)
    D -- No --> F{Can handle new<br>experiment?}
    F -- Yes --> E
    F -- No: Old cookie --> C
    E -- New/Updated Cookie --> C
    C -- Cookie --> B
    B -- Response with cookie --> A
```

### How do we indicate the client completed the test

```flow
graph LR
    A[Client] -- Completed info --> B[Server]
    B -- Log completion --> C((Log Storage))
    B -- Success --> A
```


### How do we know when the experiment is completed?

```flow
graph LR

    A[Server] -- Chron jobFilter log --> B((Log storage))
    B -- Filtered data --> C((Log storage))
    D(Data process)
    D -- Result --> E{Complete}
    E -- Yes --> B
    E -- No --> B
```

























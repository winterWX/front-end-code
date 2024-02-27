    // useEffect里的函数不可以是异步的
    //不可以
    useEffect(async()=>{
        const res = await fetchData(id)
        setData(res.data)
    },[id])


    //推荐
    useEffect(()=>{
        const getData = async() => {
            const res = await fetchData(id)
            setData(res.data)
        }
        getData()
    },[id])
<?php

namespace App\Http\Controllers;

use App\Models\todoList;
use Inertia\Inertia; 
use App\Http\Requests\StoretodoListRequest;
use App\Http\Requests\UpdatetodoListRequest;

class TodoListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Index',['todo'=> todoList::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoretodoListRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoretodoListRequest $request)
    {
        $request->validate([
            'title' => ['required'],
            'content' => ['required']
        ]);
    
        todoList::create($request->all());
    
        return redirect()->route('todo.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\todoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function show(todoList $todoList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\todoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function edit(todoList $todoList ,$index)
    {
        $todoList = $todoList->where('id',$index)->get();
        // dd($todoList);
        return Inertia::render('Edit',[
            'todo' => $todoList
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatetodoListRequest  $request
     * @param  \App\Models\todoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatetodoListRequest $request, todoList $todoList)
    {
        dd($request);
        $request->validate([
            'title' => ['required'],
            'content' => ['required']
        ]);
    
        $todoList->update($request->all());
    
        return redirect()->route('todo.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\todoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function destroy(todoList $todoList,$index)
    {
    $todoList->where('id', $index)->delete();
    return redirect()->route('todo.index');
    }
}

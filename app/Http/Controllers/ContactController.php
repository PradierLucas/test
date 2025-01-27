<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Requests\Contact\StoreRequest;
use Illuminate\Support\Facades\Auth;  
use App\Http\Requests\Contact\UpdateRequest;  
use Illuminate\Support\Facades\Storage;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Contact/index', [
            'contacts' => Contact::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $contacts = Contact::where('user_id', Auth::user()->id)->get();
       
        return Inertia::render('Contact/create',compact('contacts'));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
           $data =$request->only('name', 'phone', 'visibility');
           if($request->hasFile('avatar')){
                $file = $request->file('avatar');
                $routeImage = $file->store('avatars',['disk'=>'public']);
                $data['avatar'] = $routeImage;
           }

              $data['user_id'] = Auth::user()->id;
           Contact::create($data);

              return redirect()->route('contact.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
      
       return Inertia::render('Contact/edit',compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Contact $contact)
    {
        $data = $request->only('name', 'phone', 'visibility');
        if($request->hasFile('avatar')){
            $file = $request->file('avatar');
            $routeImage = $file->store('avatars',['disk'=>'public']);
            $data['avatar'] = $routeImage;

            if($contact->avatar){
                Storage::disk('public')->delete($contact->avatar);
            }
        }

        $data['user_id'] = Auth::user()->id;
      
        $contact->update($data);
        return redirect()->route('contact.edit', $contact);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('contact.index');
    }
}

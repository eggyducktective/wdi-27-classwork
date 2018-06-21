require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  # make sure new test run doesn't delete the database

  describe "GET #index" do
    before do
      3.times { |i| Fruit.create name: "Fruit number #{ i }" }
    end
    describe "GET #index (/fruits) in HTML format" do
      before do
        get :index
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it "should render the index view" do
        expect( response ).to render_template( :index )
      end

      it "should assign the instance variable @fruits which contains all the Fruits in reverse order" do

        p assigns(:fruits).pluck :name

        expect( assigns(:fruits) ).to be
        expect( assigns(:fruits).length ).to be 3
        expect( assigns(:fruits).first.class ).to eq Fruit
        expect( assigns(:fruits).first.name ).to eq 'Fruit number 2'
      end

    end # HTML GET

    describe "GET #index (/fruits) in JSON format" do
      before do
        get :index, format: :json
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it "should provide the name of the fruits in the JSON response" do
        fruits = JSON.parse( response.body )
        p fruits
        expect( fruits.length ).to eq 3
        expect( fruits.first['name'] ).to eq 'Fruit number 2'

      end

    end # describe GET/  index json

  end

  describe "POST to #create (/fruits)" do

    describe "a fruit with valid information" do

      before do
        # strong params <%= form_for %>
        post :create, params: { fruit: { name: 'Strawberry'} }
      end

      it 'should increase the number of fruits in the db' do
        # .length doesnt work when there is nothing in the db
        expect( Fruit.count ).to eq 1
      end

      it 'should save the correct name of the fruit to the db' do
        expect(Fruit.first.name). to eq "Strawberry"
      end

      it 'should redirect to the SHOW action' do
        expect(response).to redirect_to(Fruit.last)
        # redirect_to fruit_path(Fruit.last) or Fruit.last means the show page for this model, ie /fruits/:id
      end


    end # valid POST

    describe "a fruit with invalid information" do

      before do
        # strong params <%= form_for %>
        post :create, params: { fruit: { name: ''} }
      end

      it 'should not increase the number of fruits in the db' do
        expect( Fruit.count ).to eq 0
      end

      it 'should rerender the #new template' do
        expect(response).to render_template(:new)
      end

    end # invalid POST

  end

end

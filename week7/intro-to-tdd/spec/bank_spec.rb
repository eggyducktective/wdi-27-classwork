require_relative '../lib/bank'


describe Bank do

  let(:bank){ Bank.new "GA Bank" }

  describe ".new" do

    it "creates a new bank object" do
      expect( bank ).to_not be nil
      expect( bank ).to be_a Bank
    end

    it "assigns a name to the bank" do
      expect( bank.name ).to eq "GA Bank"

    end

    describe "#create_account" do
      it "creates an account for some particular person" do
        bank.create_account "Craigsy", 200
        expect( bank.accounts['Craigsy'] ).to eq 200
      end
      it "creates an account with a zero balance when no balance is specified" do
        bank.create_account "Craigsy"
        expect( bank.accounts['Craigsy'] ).to eq 0
      end
    end

    describe "#deposit" do
      it "deposits the correct amount into a particular customer's account" do
        bank.create_account 'Jonesy', 100
        bank.deposit 'Jonesy', 100
        expect(bank.accounts['Jonesy']).to eq 200
      end
    end

    describe "#withdraw" do
      it "withdraws the correct amount from a particular customer's account" do
        bank.create_account 'Anna', 1000
        bank.withdraw 'Anna', 100
        expect(bank.accounts['Anna']).to eq 900
      end
      it "ignores withdrawals that exceed the account balance" do
        bank.create_account 'Liza', 1000
        bank.withdraw 'Liza', 2000
        expect(bank.accounts['Liza']).to eq 1000
      end
    end

    describe "#balance" do
      it "returns the account balance for a particular customer" do
        bank.create_account 'Space Teddy', 500
        expect(bank.balance('Space Teddy')).to eq 500
      end
    end


  end # .new


end
